import { Injectable } from '@angular/core';
import { User, Address, Phone } from './user';

@Injectable()
export class UserService {
  private userList : User[] = [];
  constructor() { }

  /**
   * Adds the specified user to the userList. If there are any errors,
   * it returns an error message. Otherwise, null is returned.
   * @param user
   */
  addUser(user: User) : string {
    if (!user) return 'user is required.';
    if (!user.userId) return 'userId is required.';

    if (this.getUser(user.userId))
      return `${user.userId} already exists.`;

    this.userList.push(user);

    return null;
  }

  /**
   * Returns a copy of the specified user.  Returns null if not found.
   * 
   * @param userId 
   */
  getUser(userId: string) : User {
  	// If userList is length 0 return null
  	if (this.userList.length < 1) return null;
    // Iterate through userList for user with id = uid
    let user = this.userList.find( user => user.userId === userId );

    // If a match is not found return null
    if (!user) return null;

    return new User(user);
  }

  /**
   * Updates the data of a user in the userList. Returns an error message 
   * if any errors occur. Otherwise returns null.
   * @param user
   */
  updateUser(user: User) : string {
    //ERROR if user is null
    if (!user) return 'User must not be null.';
    //ERROR if user.userId is null
    if (!user.userId) return 'User.userId must not be null.';

    //Search userList for matching userId
    let matchIndex = this.userList.findIndex(u => u.userId === user.userId);

    // ERROR if user not in list 
    if (matchIndex < 0) return `User [${user.userId}] is not in userList.`;

    // Replace userList entry with new User 
    // -- Delete -> add or replace?
    this.userList[matchIndex] = user;
    return null;
  }

  /*
   * Provides an array containing all users in userList
   */
  getUsers() : User[]{
    // Initialize output[] array of Users 
    // Add all users in userList to output
    return this.userList.map( u => new User(u));
  }

  /*
   * Deletes a user. Returns error message in a string, or null
   * if there is no error.
   * @param userId
   */
  deleteUser(userId: String) : string {
    // Search userList for user with matching userId
    let matchIndex = this.userList.findIndex(user => user.userId === userId);
    // ERROR if user not in list 
    if (matchIndex < 0) return `userId [${userId}] not in userList.`;
    // Delete found user
    this.userList.splice(matchIndex, 1);
    return null;
  }

}
