const workflow = {
  id: 101,
  name: 'Invoice Generation',
  status: 'PENDING',
  attempts: 0
};

const result = workflowRun(workflow);

// eslint-disable-next-line no-console
console.log(result);