const UserCreateService = require('./UserCreateService');
const UserRepositoryinMemory = require("../repositories/UserRepositoryinMemory");

describe("UserCreateService", () => {
    it("user should be create", async () => {
        const user = {
            name: 'User test',
            email: "user@test.com",
            password: "123"
        };
    
        const UserRepositoryinMemory = new UserRepositoryinMemory();
        const UserCreateService = new UserCreateService(UserRepositoryinMemory);
        const userCreated = await UserCreateService.execute(user);
    
        expect(userCreated).toHaveProperty("id");
    });
})

