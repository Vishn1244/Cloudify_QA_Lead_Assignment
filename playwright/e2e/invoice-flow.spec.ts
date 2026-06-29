import { test, expect } from '@playwright/test';

test.describe('Invoice Flow', () => {

  test('Create invoice successfully', async ({ page }) => {
    await page.setContent(`
      <html>
        <body>
          <form id="loginForm">
            <input id="username" placeholder="Username" />
            <input id="password" placeholder="Password" />
            <button id="loginButton" type="button">Login</button>
          </form>

          <button id="invoices" type="button" hidden>Invoices</button>

          <div id="invoicePage" hidden>
            <button id="createInvoice" type="button">Create Invoice</button>
            <input id="customerName" placeholder="Customer Name" />
            <input id="amount" placeholder="Amount" />
            <button id="saveInvoice" type="button">Save Invoice</button>
            <div class="success-message" hidden>Invoice created successfully</div>
          </div>

          <script>
            document.getElementById('loginButton').addEventListener('click', () => {
              document.getElementById('invoices').hidden = false;
              document.getElementById('invoicePage').hidden = false;
            });

            document.getElementById('createInvoice').addEventListener('click', () => {
              document.getElementById('customerName').value = 'John';
              document.getElementById('amount').value = '1000';
            });

            document.getElementById('saveInvoice').addEventListener('click', () => {
              document.querySelector('.success-message').hidden = false;
            });
          </script>
        </body>
      </html>
    `);

    await page.waitForSelector('#username');
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password');
    await page.click('#loginButton');

    await page.waitForSelector('#createInvoice');
    await page.click('#createInvoice');

    await page.fill('#customerName', 'John');
    await page.fill('#amount', '1000');
    await page.click('#saveInvoice');

    await expect(page.locator('.success-message')).toHaveText('Invoice created successfully');
  });

});