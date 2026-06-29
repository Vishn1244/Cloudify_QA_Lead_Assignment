import { describe, it, expect } from 'vitest';
import { workflowRunReRun, type Workflow } from '../../src/workflow/workflowRunReRun.js';

describe('workflowRunReRun', () => {

  it('should rerun a failed workflow', () => {

    const workflow: Workflow = {
      id: 1,
      status: 'FAILED',
      attempts: 1
    };

    const result = workflowRunReRun(workflow);

    expect(result.status).toBe('RUNNING');
    expect(result.attempts).toBe(2);

  });

  it('should not rerun a completed workflow', () => {

    const workflow: Workflow = {
      id: 2,
      status: 'COMPLETED',
      attempts: 1
    };

    const result = workflowRunReRun(workflow);

    expect(result.status).toBe('COMPLETED');
    expect(result.attempts).toBe(1);

  });

  it('should not rerun a cancelled workflow', () => {

    const workflow: Workflow = {
      id: 3,
      status: 'CANCELLED',
      attempts: 2
    };

    const result = workflowRunReRun(workflow);

    expect(result.status).toBe('CANCELLED');
    expect(result.attempts).toBe(2);

  });

});