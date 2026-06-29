export type WorkflowStatus = 'FAILED' | 'COMPLETED' | 'CANCELLED' | 'RUNNING' | 'PENDING';

export interface Workflow {
  id: number;
  status: WorkflowStatus;
  attempts: number;
}

export function workflowRunReRun(workflow: Workflow): Workflow {
  if (workflow.status === 'FAILED') {
    return {
      ...workflow,
      status: 'RUNNING',
      attempts: workflow.attempts + 1
    };
  }

  return workflow;
}
