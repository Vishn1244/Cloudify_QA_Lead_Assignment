export interface Deal {
  id: string;
  customer: string;
  contactPerson: string;
  email: string;
  currency: string;
  amount: number;
  discount: number;
  tax: number;
  paymentTerms: string;
  status: string;
}

export interface Invoice {
  invoiceId: string;
  customer: string;
  contactPerson: string;
  email: string;
  currency: string;
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  paymentTerms: string;
  status: string;
}

export function transformDealToInvoice(deal: Deal): Invoice {

  const discountAmount = (deal.amount * deal.discount) / 100;

  const subtotal = deal.amount - discountAmount;

  const taxAmount = (subtotal * deal.tax) / 100;

  const total = subtotal + taxAmount;

  return {
    invoiceId: `INV-${deal.id}`,
    customer: deal.customer,
    contactPerson: deal.contactPerson,
    email: deal.email,
    currency: deal.currency,
    subtotal,
    discount: discountAmount,
    tax: taxAmount,
    total,
    paymentTerms: deal.paymentTerms,
    status: "Pending"
  };
}