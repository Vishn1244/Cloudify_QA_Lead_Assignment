const workflow = {
  id: 101,
  name: 'Invoice Generation',
  status: 'PENDING',
  attempts: 0
};

const result = workflowRun(workflow);

console.log(result);