import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <section>
      <div class="table-header">
        <div class="table-cell" *ngFor="let column of settings.columns"><grid-column-filter [name]="column.title"></grid-column-filter>{{column.title}}</div>
      </div>
      <div class="table-body">
        <div class="table-row" *ngFor="let row of data">
          <div class="table-cell" *ngFor="let x of settings.columns">{{row[x.title]}}</div>
        </div>
      </div>
    </section>
  `
})
export class AppComponent  {
  data = [
  {
    ID: 1,
    Name: "Leanne Graham",
    Username: "Bret",
    Email: "Sincere@april.biz"
  },
  {
    ID: 2,
    Name: "Ervin Howell",
    Username: "Antonette",
    Email: "Shanna@melissa.tv"
  },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    },
    {
      ID: 2,
      Name: "Ervin Howell",
      Username: "Antonette",
      Email: "Shanna@melissa.tv"
    }
  ];

  settings = {
    columns: [
      {
        title: 'ID'
      },
      {
        title: 'Name'
      },
      {
        title: 'Username'
      },
      {
        title: 'Email'
      }
    ]
  };
}
