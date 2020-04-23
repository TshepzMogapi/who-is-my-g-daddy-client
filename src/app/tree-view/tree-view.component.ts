import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  @Input() data;
  @Input() parentIdNumber;

  // treeViewData = {
  //   name: '',
  //   children: [],

  // };
  treeViewData = [];


  node = {
    name: '',
    children: []
  };
  earlyParents:any;

  nodes: any;

  root;
  // flat = [];
  options = {};

  htmlTest;

  container = document.createElement('div');

  parent;

  identityNumber:string;

  constructor() { }

  ngOnInit() {

    this.identityNumber = this.parentIdNumber.toString();
 
    const idMapping = this.data.reduce((acc, el, i) => {
      acc[el.id] = i;
      return acc;
    }, {});
  
    // let root;
    this.data.forEach(el => {

      if (el.identityNumber === this.parentIdNumber.toString()) {
        
        this.root = el;
        return;
      }
      // Use our mapping to locate the parent element in our data array
      //  if this.data is undefined use other parent
      let parentEl;
      if(idMapping[el.motherId] !== undefined) {
        parentEl = this.data[idMapping[el.motherId]]
      } else {
        parentEl = this.data[idMapping[el.fatherId]]


      }
      
      // Add our current el to its parent's `children` array
      parentEl.children = [...(parentEl.children || []), el];
    });

    this.container.setAttribute('class', 'tree');
    
    this.createSublist(this.container, this.root.children);

    let treeComp = document.getElementsByClassName("tree-container")[0];
    console.log(treeComp);

    treeComp.appendChild(this.container);
    
    console.log(this.container);
    // document.body.appendChild(this.container);
    
  }

  createSublist(container, args) {

    var ul = document.createElement('ul');


    for(let j = 0; j < args.length; j++) {

      var row = args[j];

      var li = document.createElement('li');

      var a = document.createElement("a");
      a.setAttribute('href', '#');
      a.innerText = row.name

      li.appendChild(a);

      var nodes = row.children;

      if(nodes && nodes.length) {

        this.createSublist(li, nodes);

      }

      ul.appendChild(li);

    }
    container.appendChild(ul);
    
  }
 

  getChildren(parent) {
    let children = this.data.filter(p => p.fatherId === parent.id || p.motherId == parent.id)
    // this.earlyParents = children;
    
    return children;
  }

}
