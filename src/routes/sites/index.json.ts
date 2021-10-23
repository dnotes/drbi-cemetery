import sites from '$lib/sites'

export async function get() {
  return { body: sites }
}
