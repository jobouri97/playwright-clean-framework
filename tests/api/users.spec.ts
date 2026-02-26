import { test, expect } from '@fixtures/test';

test('GET - list users', async ({ userClient }) => {
    const { response, body } = await userClient.listUsers(10, 0);

    expect(response.status()).toBe(200);

    expect(body.users.length).toBeGreaterThan(0);

    //Just to see response
    console.log('\n=== FULL RESPONSE OBJECT ===');
    console.log(JSON.stringify(body, null, 2));
    console.log('============================\n');
    console.log('==================\n');
});

test('POST - create user', async ({ userClient }) => {
    const payload = { firstName: 'Hasan', lastName: 'Test', age: 25 };
    const { response, body } = await userClient.createUser(payload);

    expect([200, 201]).toContain(response.status());

    // Assertions to verify the response body
    expect(body).toHaveProperty('id');
    expect(body.firstName).toBe(payload.firstName);
    expect(body.lastName).toBe(payload.lastName);
    expect(body.age).toBe(payload.age);

    //Just to see response
    console.log('Created user:', JSON.stringify(body, null, 2));
});

test('PUT - update user returns updated fields', async ({ userClient }) => {
    const id = 1;
    const updatePayload = { firstName: 'UpdatedName', age: 40 };
    const { response, body } = await userClient.updateUser(id, updatePayload);

    expect(response.status()).toBe(200);
    expect(body).toHaveProperty('id', id);
    expect(body.firstName).toBe(updatePayload.firstName);
    expect(body.age).toBe(updatePayload.age);

    console.log('UPDATED USER RESPONSE:\n', JSON.stringify(body, null, 2));
});

test('DELETE - remove user', async ({ userClient }) => {
    const id = 1;

    const { response, body } = await userClient.deleteUser(id);

    expect(response.status()).toBe(200);
    expect(body.isDeleted).toBe(true);
    expect(body.deletedOn).toBeTruthy();
    expect(body.id).toBe(id);

    console.log('DELETE RESPONSE:\n', JSON.stringify(body, null, 2));
});


test('FLOW - create user then update existing then delete existing', async ({ userClient }) => {
  // 1) CREATE (validate contract فقط)
  const createPayload = { firstName: 'Hasan', lastName: 'Portfolio', age: 25 };
  const { response: createRes, body: created } = await userClient.createUser(createPayload);

  expect([200, 201]).toContain(createRes.status());
  expect(created).toHaveProperty('id');
  expect(created.firstName).toBe(createPayload.firstName);
  expect(created.lastName).toBe(createPayload.lastName);
  expect(created.age).toBe(createPayload.age);

  console.log('CREATED:\n', JSON.stringify(created, null, 2));

  // 2) UPDATE (على user موجود فعليًا)
  const existingId = 1;
  const updatePayload = { firstName: 'Updated', age: 30 };
  const { response: updateRes, body: updated } = await userClient.updateUser(existingId, updatePayload);

  expect(updateRes.status()).toBe(200);
  expect(updated.id).toBe(existingId);
  expect(updated.firstName).toBe(updatePayload.firstName);
  expect(updated.age).toBe(updatePayload.age);

  console.log('UPDATED:\n', JSON.stringify(updated, null, 2));

  // 3) DELETE (على user موجود فعليًا)
  const { response: deleteRes, body: deleted } = await userClient.deleteUser(existingId);

  expect(deleteRes.status()).toBe(200);
  expect(deleted.id).toBe(existingId);
  expect(deleted.isDeleted).toBe(true);

  console.log('DELETED:\n', JSON.stringify(deleted, null, 2));
});
