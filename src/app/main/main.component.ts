import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Blogs, Users } from './main.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public i: number = 2;
  public display = false;
  public another = false;
  public begin = true;
  public after = false;
  public emailSignIn = '';
  public passwordSignIn = '';
  public Username = '';
  public signUpEmail = '';
  public password = '';
  public textPost = '';
  public titlePost = '';
  public newTitle = '';
  public newText = '';
  public indexEdit!: number;
  public date = new Date;
  public str!: string;
  public mainBlog: Array<Blogs> = [];
  public mainUser: Array<Users> = [];

  constructor(private blogService: ServicesService) { }

  ngOnInit(): void {
    this.loadService();
  }
  loadService(): void {
    this.mainBlog = this.blogService.blogs;
  }
  addUsers(): void {
    const user: Users = {
      id: this.i++,
      username: this.Username,
      email: this.signUpEmail,
      password: this.password,
    }
    if(this.Username != '' && this.signUpEmail != '' && this.password != ''){
      this.blogService.addUsers(user);
      this.begin = !this.begin;
      this.after = !this.after; 
    }
    this.str = this.Username;
    this.Username = '';
    this.signUpEmail = '';
    this.password = '';
  }
  signOut(): void{
    this.after = !this.after; 
    this.begin = !this.begin;
    this.display = false;
  }
  addPost(): void{
    const blog: Blogs = {
      id: this.i++,
      postedBy: this.str,
      topic: this.titlePost,
      date: this.date,
      message: this.textPost,
    }
    if(this.titlePost != ''){
      this.blogService.addPost(blog);
    }
    this.textPost = '';
    this.titlePost = '';
  }
  entry(): void{
    for(let i = 0; i < this.blogService.users.length; i++){
      if(this.blogService.users[i].email === this.emailSignIn && this.blogService.users[i].password === this.passwordSignIn){
        this.begin = !this.begin;
        this.after = !this.after; 
        this.str = this.blogService.users[i].username;
        this.emailSignIn = '';
        this.passwordSignIn = '';
      }
    }  
    
  }
  displayOn(): void{
    for(let i = 0; i < this.blogService.blogs.length; i++){
      if(this.after === true){
        this.display = true;
      }
  }
  }
  deleteBlog(deleteBlog: Blogs): void{
    this.blogService.deleteBlog(deleteBlog.id)

  }
  editBlog(info: Blogs): void{
    this.indexEdit = info.id;     
  }
  editPost(): void{
    this.blogService.blogs[this.indexEdit - 1].topic = this.newTitle;
    this.blogService.blogs[this.indexEdit - 1].message = this.newText;
    this.newTitle = '';
    this.newText = '';
  }
}
