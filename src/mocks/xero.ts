export interface Invoice {
  invoiceNumber: string;
  customerName: string;
  currency: string;
  total: number;
  status: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  invoice?: Invoice;
}

export class XeroService {
  async createInvoice(invoice: Invoice): Promise<ApiResponse> {
    // Simulate API call
    return {
      success: true,
      message: 'Invoice created successfully.',
      invoice
    };
  }

  async getInvoice(invoiceNumber: string): Promise<ApiResponse> {
    return {
      success: true,
      message: 'Invoice retrieved successfully.',
      invoice: {
        invoiceNumber,
        customerName: 'ABC Technologies',
        currency: 'USD',
        total: 1500,
        status: 'AUTHORISED'
      }
    };
  }

  async deleteInvoice(invoiceNumber: string): Promise<ApiResponse> {
    return {
      success: true,
      message: `Invoice ${invoiceNumber} deleted successfully.`
    };
  }
}
