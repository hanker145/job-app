import jobs from './data.json'

async function getJobs(page, searchQuery = null) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 500)
  })

  await promise

  let filteredJobs = searchQuery
    ? jobs.filter(
        job =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.skills.some(skill =>
            skill.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : jobs

  let pagesTotal = Math.ceil(filteredJobs.length / 5)

  let startIndex = (page - 1) * 5
  let endIndex = startIndex + 5

  return {
    jobs: filteredJobs.slice(startIndex, endIndex),
    pagesTotal
  }
}

async function getJob(id) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 500)
  })
  await promise

  return jobs.find(job => job.id == id)
}

export default { getJobs, getJob }
