import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface UserData{
  id: number
  Name1: string
  Name2: string
}

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}
  new_item_1 = ''
  new_item_2 = ''
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public l_ist: UserData[] = [{id: 0, Name1: 'Петров', Name2: 'Петр'}]
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  btn_click() {
    console.log(this);
  }

  add_in_list() {
    this.l_ist.push({id: this.l_ist.length + 1, Name1: this.new_item_1, Name2: this.new_item_2})
  }

  delete_item(target:number) {
    // this.l_ist
    let count = 0; 
    for (let x of this.l_ist) {
      if (x.id == target) {
        this.l_ist.splice(count, 1)
      }
      count++;
    }
  }
}
