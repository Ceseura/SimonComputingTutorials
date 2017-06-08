import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { User } from "app/user-service/user";

describe('UserService', function() {
  beforeEach (function() {
    TestBed.configureTestingModule({
      providers: [UserService]
    });

    this.user = new User();
    this.user.userId = 'superman';
    this.user.firstName = 'Clark';
    this.user.lastName = 'Kent';
    this.user.role = 'Poweruser';
    this.user.title = 'Project Manager';
  });

   it('Should create service', inject([UserService], function(service: UserService) {
    expect(service).toBeTruthy();
  }));

  it('Should add user', inject([UserService], function(service: UserService) {
    // Null parameter
    let result = service.addUser(null);
    expect(result).toBeTruthy();

    // Add user with bad userId
    let badUserId = new User(this.user);
    badUserId.userId = null;
    result = service.addUser(badUserId);
    expect(result).toBeTruthy();

    // Add the user for the first time
    result = service.addUser(this.user);
    expect(result).toBeNull();

    // Get the user and confirm it got added
    let user2 = service.getUser(this.user.userId);
    expect(user2.userId).toEqual(this.user.userId);
    expect(user2.firstName).toEqual(this.user.firstName);

    // Try to add the same user again
    result = service.addUser(this.user);
    expect(result).toContain('superman already exists.');
  }));

  it('Should get user', inject([UserService], function(service: UserService) {
    // Null parameter
    let result = service.getUser(null);
    expect(result).toBeNull();

    // UserId not in userList
    result = service.getUser('1');
    expect(result).toBeNull();

    // Add valid user 
    service.addUser(this.user);

    // Get the user and ensure its correct
    let retrievedUser = service.getUser(this.user.userId);
    expect(retrievedUser).toBeTruthy();
    expect(retrievedUser.userId).toEqual(this.user.userId);
    expect(retrievedUser.firstName).toEqual(this.user.firstName);
  }));

  it('Should update user', inject([UserService], function(service: UserService) {
    // Null Parameter 
    let result = service.updateUser(null);
    expect(result).toBeTruthy();

    // userId is null
    let badUserId = new User(this.user);
    badUserId.userId = null;
    result = service.updateUser(badUserId);
    expect(result).toBeTruthy();

    // Add valid user, check to make sure add/getted properly
    service.addUser(this.user);
    let retrievedUser = service.getUser(this.user.userId);
    expect(retrievedUser.userId).toEqual(this.user.userId);
    expect(retrievedUser.firstName).toEqual(this.user.firstName);

    // Try to update user not in userList
    let notInDatabase = new User();
    notInDatabase.userId = "the legendary";
    notInDatabase.firstName = "Hero, ";
    notInDatabase.lastName = "Reginald";
    notInDatabase.role = "SuperUser";
    notInDatabase.title = "Admin";

    result = service.updateUser(notInDatabase);
    expect(result).toBeTruthy();

    // Try to update user in the database 
    let updatedUser = new User(this.user);
    updatedUser.firstName = "souperman";
    updatedUser.lastName = "AKA Clark Kent";

    result = service.updateUser(updatedUser);
    expect(result).toBeNull();

    // Retrieve from database and verify that update worked
    let newUser = service.getUser(updatedUser.userId);
    expect(newUser.userId).toEqual(this.user.userId);
    expect(newUser.userId).toEqual(updatedUser.userId);
    expect(newUser.userId).toEqual(retrievedUser.userId);
    expect(newUser.firstName).toContain("souperman");
    expect(newUser.lastName).toContain("AKA Clark Kent");

  }));

  it('Should delete user', inject([UserService], function(service: UserService) {
    // Null parameter 
    let result = service.deleteUser(null);
    expect(result).toBeTruthy();

    // User not in list
    result = service.deleteUser(this.user.userId);
    expect(result).toBeTruthy();

    // Add user to List 
    service.addUser(this.user);

    // Delete user from list
    result = service.deleteUser(this.user.userId);
    expect(result).toBeNull();
  }));

  it('Should get the user list', inject([UserService], function(service: UserService) {
    // Empty List
    let result = service.listUsers();
    expect(result.length).toBe(0);

    // Add users to list 
    service.addUser(this.user);
    let user2 = new User(this.user);
    user2.userId = "superman2";
    service.addUser(user2);
    let user3 = new User(this.user);
    user3.userId = "superman3";
    service.addUser(user3);

    // call list 
    result = service.listUsers();
    expect(result.length).toBe(3);
  }));

});
