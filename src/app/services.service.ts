import { Injectable } from '@angular/core';

import { Blogs, Users } from './main/main.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public date = new Date;
  
  

  public blogs: Array<Blogs> = [
    {
      id: 1,
      postedBy: 'admin',
      topic: 'Forst post',
      date: this.date,
      message: 'sign up',

    }
  ]
  public users: Array<Users> = [
    {
      id: 1,
      username: 'admin',
      email: 'admin@gmail.com',
      password: 'admin123'
    }
  ]

  constructor() { }



  addUsers(users: Users): void{
    this.users.push(users);
  }
  addPost(blogs: Blogs): void{
    this.blogs.push(blogs)
  }
  deleteBlog(i:number): void{
    const index = this.blogs.findIndex(d => d.id === i);
    this.blogs.splice(index,1)
  }
  editBlog(i:number ): void{
    const index = this.blogs.findIndex(d => d.id === i);
    this.blogs.splice(index, 1)
  }
}
