import { execSync } from 'child_process'
import { existsSync, rmSync } from 'fs'
import { join } from 'path'

const DOCKER_CONTAINER_NAME = 'strapi'
const STRAPI_SPEC_PATH = '/opt/app/specification.json'
const TYPES_DIR = join(process.cwd(), 'src/types')
const TYPES_OUTPUT_FILE = join(TYPES_DIR, 'auto-generated-strapi-types.ts')
const TEMP_SPEC_FILE = join(process.cwd(), 'specification.json')

async function generateTypes() {
  console.log('🔄 Generating Strapi types...')

  try {
    console.log('📦 Generating OpenAPI specification in Strapi container...')
    execSync(
      `docker exec ${DOCKER_CONTAINER_NAME} sh -c "npm run strapi openapi generate"`,
      {
        stdio: 'inherit',
      },
    )

    console.log('📋 Copying specification.json from container...')
    execSync(
      `docker cp ${DOCKER_CONTAINER_NAME}:${STRAPI_SPEC_PATH} ${TEMP_SPEC_FILE}`,
      {
        stdio: 'inherit',
      },
    )

    if (!existsSync(TEMP_SPEC_FILE)) {
      throw new Error('Failed to copy specification.json from container')
    }

    console.log('🌐 Generating TypeScript types from OpenAPI specification...')
    execSync(
      `npx openapi-typescript ${TEMP_SPEC_FILE} -o ${TYPES_OUTPUT_FILE}`,
      { stdio: 'inherit' },
    )

    rmSync(TEMP_SPEC_FILE)
    console.log('🧹 Removed temporary specification.json')

    console.log('✨ Types generation completed!')
    console.log(`✅ Types saved to: ${TYPES_OUTPUT_FILE}`)
  } catch (error) {
    console.error('❌ Error generating types:', error)

    if (existsSync(TEMP_SPEC_FILE)) {
      rmSync(TEMP_SPEC_FILE)
    }

    process.exit(1)
  }
}

generateTypes()
