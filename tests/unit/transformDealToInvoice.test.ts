import { describe, it, expect } from 'vitest';
import { transformDealToInvoice } from '../../src/transformation/transformDealToInvoice.js';

describe('transformDealToInvoice', () => {
  it('converts a deal into an invoice with correct totals', () => {
    const deal = {
      id: '123',
      customer: 'Acme Corp',
      contactPerson: 'Jane Doe',
      email: 'jane@acme.com',
      currency: 'USD',
      amount: 200,
      discount: 10,
      tax: 5,
      paymentTerms: 'Net 30',
      status: 'OPEN'
    };

    const invoice = transformDealToInvoice(deal);

    expect(invoice.invoiceId).toBe('INV-123');
    expect(invoice.customer).toBe('Acme Corp');
    expect(invoice.subtotal).toBe(180);
    expect(invoice.discount).toBe(20);
    expect(invoice.tax).toBe(9);
    expect(invoice.total).toBe(189);
    expect(invoice.status).toBe('Pending');
  });
});
