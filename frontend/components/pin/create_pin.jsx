import React from 'react';

class CreatePin extends React.Component {
    constructor(props) {
        super(props);
        debugger

        this.state = {
            pin: {
                creator_id: window.currentUser.id,
                title: null,
                description: null,
                description2: null,
                websiteURL: null,
                board_id: null,
                photo: null,
            }
        }

        this.handelAddText = this.handelAddText.bind(this);
        this.handelUlClick = this.handelUlClick.bind(this);
        this.boardClickSelect = this.boardClickSelect.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
        // this.mouseHoverBoard = this.mouseHoverBoard.bind(this);
        this.handelPhotoSelect = this.handelPhotoSelect.bind(this);
    }

    handelSubmit(e) {
        e.preventDefault();
        debugger
        const formData = new FormData();
        formData.append('pin[photo]', this.state.pin.photo);
        formData.append('pin[creator_id]', this.state.pin.creator_id);
        formData.append('pin[title]', this.state.pin.title);
        formData.append('pin[description]', this.state.pin.description);
        formData.append('pin[description2]', this.state.pin.description2);
        formData.append('pin[websiteURL]', this.state.pin.websiteURL);
        formData.append('pin[board_id]', this.state.pin.board_id);
debugger
        this.props.createNewPin(formData)
            .then(() => {
                // direct to pin show page
                console.log('should now direct to pin show page')
            })
    }


    componentDidMount(){
        this.props.fetchBoards(window.currentUser.id)

        if (!window.currentUser) {
        } else {
            this.props.fetchUser(window.currentUser.id);
        }
    }

    // componentDidUpdate(prevProps){
    //     debugger
    //     if(prevProps.boards !== this.props.boards || this.props.boards === undefined){
    //         debugger
    //         this.props.fetchBoards(window.currentUser.id)
    //     }
    // }

    handelAddText(e){
        e.preventDefault();
        let textarea = document.getElementById('alt-text-area');
        let button = document.getElementById('alt-text-area-button');
        textarea.style.display = 'block';
        button.style.display = 'none';
    }

    handelUlClick(e){
        debugger
        e.preventDefault();
        debugger
        let ul = document.getElementById('board-dropdown-create-pin')
        if (ul.style.display === "block") {
            ul.style.display = "none"
        } else {
            ul.style.display = "block"
        }
    }

    inputChange(field){
        let prevState = this.state.pin
        debugger
        return (e) => {
            prevState[field] = e.currentTarget.value
            this.setState({ pin: prevState })
            debugger
        }
    }


    boardClickSelect(e){
        e.preventDefault();
        let prevState = this.state.pin
        prevState["board_id"] = e.currentTarget.id
        this.setState({ pin: prevState })


        let ul = document.getElementById('board-dropdown-create-pin')
        ul.style.display = "none"

        let displayTitle = document.getElementById('board-dd-create-pin');
        displayTitle.innerText = e.currentTarget.innerText;
    }

    // mouseHoverBoard(e){
    //     e.preventDefault();
    //     debugger
    //     let elementHovered = document.getElementById(e.currentTarget.id + "save-button")
    //     if(elementHovered.style.display === 'relative'){
    //         elementHovered.style.display = 'none';
    //     } else {
    //         elementHovered.style.display = 'relative';
    //     }
    // }

    handelPhotoSelect(e){
        let prevState = this.state.pin
        prevState["photo"] = e.currentTarget.files[0]
        this.setState({ pin: prevState });
    }

    render() {
        debugger
        if (!this.props.boards || this.props.boards === undefined || this.props.boards.length === 0){
            return null
        }
        
        const boards = this.props.boards
        const firstBoard = boards[0].title
        // const dropDDisplayB = this.state.pin.board_id;
        return (
            <div className="create-pin-main-div">

                <div className="top-bar-create-pin">
                    <div>
                        <div placeholder="Select" id="board-dd-create-pin" className="board-dd-create-pin" onClick={this.handelUlClick}>
                            {firstBoard} 
                        </div>

                        <div className="save-button-create-pin" onClick={this.handelSubmit}>Save</div>
                    </div>

                    <div className="board-dropdown-create-pin" id="board-dropdown-create-pin">
                        <ul className="board-dropdown-ol" id="board-dropdown-ol">
                           {boards.map(board => 
                               <div className="this-list-children-pin" key={board.id} onClick={this.boardClickSelect} id={board.id} onMouseEnter={this.mouseHoverBoard} onMouseLeave={this.mouseHoverBoard}>
                                   {board.title}

                                    <div className="logo-on-logged-in-header-board-lock-pin" style={board.is_private ? {display: "flex" } : { display: "none" }}>
                                        <img id="logo-lock-icon-pin-page" src={window.lockURL} alt="lock-icon" />
                                    </div>

                                    {/* <div className="save-button-create-pin" id={board.id + "save-button"}>Save</div> */}
                                   </div>
                            //    <li>{"Photo"}{board.title}</li>
                           )}
                        </ul>
                    </div>
                </div>



                <div className="bottom-create-pin">
                    <div className="left-side-create-pin">
                        <input type="file" name="" id="" 
                        onChange={this.handelPhotoSelect}
                        />
                    </div>

                    <div className="right-side-create-pin">

                        <input type="text" placeholder="Add your title" onChange={this.inputChange('title')}/>
                        <div>
                            <div className="profile-div-small">
                                <img className="profile-photo-icon" src={this.props.user.photoUrl} alt="logo" />
                            </div>

                            <div>{this.props.user.f_name} {this.props.user.l_name}</div>

                        </div>

                        <textarea  onChange={this.inputChange('description')} name="" id="" cols="40" rows="1" placeholder="Tell everyone what your Pin is about">
                        </textarea>

                        <textarea onChange={this.inputChange('description2')} name="" id="alt-text-area" cols="40" rows="1" placeholder="Explain what people can see in the Pin" style={{display: 'none'}}>
                        </textarea>
                        <div  onClick={this.handelAddText} id="alt-text-area-button">Add alt text</div>

                        <input onChange={this.inputChange('websiteURL')} type="text" placeholder="Add a destination link"/>
                    </div>
                </div>

            </div>
        )
    }
}

export default CreatePin;