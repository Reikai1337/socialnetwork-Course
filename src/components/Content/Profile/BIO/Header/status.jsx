import React from "react"
import s from "./BioHeader.module.css"
class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    toggleEditing(){
        this.setState({
            editMode: !this.state.editMode
        })
        if(this.state.editMode) this.props.updateStatus(this.state.status)
    }
    onStatusChange =(e)=>{
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(this.props.status !== prevProps.status){
            this.setState({
                status: this.props.status
            })
        }
    }
    render(){
        return (
            <div className={s.status}>
                {this.state.editMode ? 
                <input 
                    value={this.state.status} 
                    onBlur={this.toggleEditing.bind(this)} 
                    className={s.inputArea}
                    autoFocus={true}
                    onChange={this.onStatusChange}
                />
                :
                <span onClick={this.toggleEditing.bind(this)}>
                    {this.state.status}
                </span>
                }
            </div>
        )
    }
    
}

export default Status