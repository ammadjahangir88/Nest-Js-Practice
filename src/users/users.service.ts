import { Injectable } from "@nestjs/common";


@Injectable()
export class UsersService {
    users: { id: number, name: string, age: number, gender: string, isMarried: boolean }[] = [
        { id: 1, name: "John", age: 28, gender: "male", isMarried: false },
        { id: 2, name: "Alia", age: 72, gender: "female", isMarried: true },
        { id: 3, name: "Mike", age: 34, gender: "male", isMarried: true },
        { id: 4, name: "Sara", age: 25, gender: "female", isMarried: false },
        { id: 5, name: "Tom", age: 41, gender: "male", isMarried: true },
        { id: 6, name: "Emma", age: 29, gender: "female", isMarried: false },
        { id: 7, name: "David", age: 31, gender: "male", isMarried: true },
        { id: 8, name: "Sophia", age: 38, gender: "female", isMarried: true },
        { id: 9, name: "Chris", age: 24, gender: "male", isMarried: false },
        { id: 10, name: "Olivia", age: 30, gender: "female", isMarried: true },
        { id: 11, name: "Jake", age: 45, gender: "male", isMarried: true },
        { id: 12, name: "Ava", age: 33, gender: "female", isMarried: false },
        { id: 13, name: "Daniel", age: 39, gender: "male", isMarried: true },
        { id: 14, name: "Mia", age: 27, gender: "female", isMarried: false },
        { id: 15, name: "Matt", age: 36, gender: "male", isMarried: true },
        { id: 16, name: "Lily", age: 22, gender: "female", isMarried: false },
        { id: 17, name: "Steve", age: 53, gender: "male", isMarried: true },
        { id: 18, name: "Zara", age: 40, gender: "female", isMarried: true },
        { id: 19, name: "Robert", age: 50, gender: "male", isMarried: true },
        { id: 20, name: "Emily", age: 19, gender: "female", isMarried: false },
        { id: 21, name: "Kevin", age: 35, gender: "male", isMarried: true },
        { id: 22, name: "Nina", age: 44, gender: "female", isMarried: true },
        { id: 23, name: "Jason", age: 48, gender: "male", isMarried: true },
        { id: 24, name: "Grace", age: 26, gender: "female", isMarried: false },
        { id: 25, name: "Ryan", age: 32, gender: "male", isMarried: false },
        { id: 26, name: "Bella", age: 21, gender: "female", isMarried: false },
        { id: 27, name: "Aaron", age: 47, gender: "male", isMarried: true },
        { id: 28, name: "Chloe", age: 37, gender: "female", isMarried: true },
        { id: 29, name: "Ethan", age: 42, gender: "male", isMarried: true },
        { id: 30, name: "Ella", age: 23, gender: "female", isMarried: false },
        { id: 31, name: "George", age: 60, gender: "male", isMarried: true },
        { id: 32, name: "Hannah", age: 34, gender: "female", isMarried: true },
        { id: 33, name: "Ben", age: 46, gender: "male", isMarried: true },
        { id: 34, name: "Isla", age: 29, gender: "female", isMarried: false },
        { id: 35, name: "Leo", age: 38, gender: "male", isMarried: true },
        { id: 36, name: "Amelia", age: 20, gender: "female", isMarried: false },
        { id: 37, name: "Nathan", age: 43, gender: "male", isMarried: true },
        { id: 38, name: "Layla", age: 28, gender: "female", isMarried: true },
        { id: 39, name: "Samuel", age: 27, gender: "male", isMarried: false },
        { id: 40, name: "Lucy", age: 31, gender: "female", isMarried: true },
        { id: 41, name: "Owen", age: 33, gender: "male", isMarried: false },
        { id: 42, name: "Harper", age: 35, gender: "female", isMarried: true },
        { id: 43, name: "Henry", age: 29, gender: "male", isMarried: false },
        { id: 44, name: "Evelyn", age: 39, gender: "female", isMarried: true },
        { id: 45, name: "Liam", age: 30, gender: "male", isMarried: true },
        { id: 46, name: "Sofia", age: 24, gender: "female", isMarried: false },
        { id: 47, name: "Logan", age: 37, gender: "male", isMarried: true },
        { id: 48, name: "Avery", age: 25, gender: "female", isMarried: false },
        { id: 49, name: "Noah", age: 40, gender: "male", isMarried: true },
        { id: 50, name: "Scarlett", age: 27, gender: "female", isMarried: false }
    ];


    getAllUsers(page: number, limit: number) {
        const offset=(page-1) * (limit);
        const lastItem=offset + limit
        console.log("the offset is",offset)
        if (offset >= this.users.length) {
            
            return "No USers Find"
        }
        return {
            data: this.users.slice(offset, lastItem),
            currentPage: page,
            totalPages: Math.ceil(this.users.length / limit),
            totalUsers: this.users.length
          };
    }

    getUserById(id: number) {
        console.log(id)
        return this.users.find(x => x.id === id)
    }

    createUser(user: { id: number, name: string, age: number, gender: string, isMarried: boolean }) {
        this.users.push(user)
    }
}