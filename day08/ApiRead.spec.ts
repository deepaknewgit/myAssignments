import test, { expect } from '@playwright/test';

let sysUniqueId: any;

test.describe.serial('Servicenow Resource creation', () => {
  test('Create incident using API POST method', async ({ request }) => {
    const response = await request.post(
      'https://dev216320.service-now.com/api/now/table/change_request',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic YWRtaW46VVkybU9VZV43cEBm', // admin:UY2mOUe^7p@f
        },
        data: {
          description: 'Creating incident through pw api call',
        },
      }
    );

    const incidentResponse = await response.json();
    console.log(response.status());
    console.log(incidentResponse.result.sys_id);

    sysUniqueId = incidentResponse.result.sys_id; // Store the sys_id as global variable
    expect(response.status()).toBe(201);
    expect(response.statusText()).toBe('Created');
  });

  test('Get the incident using API GET method', async ({ request }) => {
    const response = await request.get(
      `https://dev216320.service-now.com/api/now/table/incident/${sysUniqueId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic YWRtaW46VVkybU9VZV43cEBm', // admin:UY2mOUe^7p@f
        },
      }
    );

    const specificIncident = await response.json();
    console.log(response.status());
    console.log(specificIncident.result.number);

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe('OK');
  });

  test('Update the incident using API PATCH method', async ({ request }) => {
    const response = await request.patch(
      `https://dev216320.service-now.com/api/now/table/incident/${sysUniqueId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic YWRtaW46VVkybU9VZV43cEBm', // admin:UY2mOUe^7p@f
        },
        data: {
          short_description: 'Updating the record using pw api',
        },
      }
    );

    const updatedIncident = await response.json();
    console.log(response.status());
    console.log(updatedIncident);

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe('OK');
  });

  test('Delete the incident using API DELETE method', async ({ request }) => {
    const response = await request.delete(
      `https://dev216320.service-now.com/api/now/table/incident/${sysUniqueId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic YWRtaW46VVkybU9VZV43cEBm', // admin:UY2mOUe^7p@f
        },
      }
    );

    console.log(response.status());
    expect(response.status()).toBe(204);
    expect(response.statusText()).toBe('No Content');
  });

  // Example placeholder for end-to-end tests
  // test('End-to-end test', async ({ page }) => {
  //   // Login step
  //   // Click all
  //   // Filter -> incident
  //   // Search -> incident number (pass the value from the API)
  // });
});
