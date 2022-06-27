
const createJob = async (req, res) => {
  res.send('Create job');
};
const deleteJob = async (req, res) => {
  res.send('delete job');
};
const getAllJobs = async (req, res) => {
  res.send('getAll jobs');
};
const updateJob = async (req, res) => {
  res.send('update job');
};
const showStats = async (req, res) => {
  res.send('Show Stats');
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
