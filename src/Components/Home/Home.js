import React, {Component} from 'react'
import Tree from 'react-sortable-tree'

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      treeData: [{ title: '', children: [{ title: '' }] }],
      components: [{}]
    }
  }
  
  render(){
    return(
      <div>
        Home
        <Tree
            treeData={this.state.treeData}
            onChange={treeData => this.setState({treeData})}
            onMoveNode={(e) => this.updateParentId(e)}
            />
      </div>
    )
  }
}