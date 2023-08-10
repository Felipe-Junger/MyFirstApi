const UserRepositoryinMemory = require('../repositories/UserRepositoryinMemory');
const UserCreateService = require('./UserCreateService');
const AppError = require('../utils/AppError');

describe("UserCreateService", () => {
    let UserRepositoryinMemory = null;
    let UserCreateService = null;

    BeforeEach(() => {
        UserRepositoryinMemory = new UserRepositoryinMemory();
        UserCreateService = new UserCreateService(UserRepositoryinMemory);
    });

    it("user should be created", async () => {
        const user = {
            name: 'User test',
            email: "user@test.com",
            password: "123"
        };
    
        
        const userCreated = await UserCreateService.execute(user);
        expect(userCreated).toHaveProperty("id");
    });

    it("user should not be created with an existed email", async () => {
        const user1 = {
            name: "User Test 1",
            email: "user@test.com",
            password: "123"
        };

        const user2 = {
            name: "User Test 2",
            email: "user@test.com",
            password: "456"
        };

        await userCreateService.execute(user1);
        await expect(UserCreateService.execute(user2)).rejects.toEqual(new AppError('Esse email já está em uso.'));
    });
})

