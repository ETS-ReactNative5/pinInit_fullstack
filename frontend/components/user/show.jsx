import React from 'react';
import { Link } from 'react-router-dom';
// import BoardForShowPage from '../board/show_board_container';
// import { render } from 'react-dom';


class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoUrl: [],
            isActive: false,
            boards: []
        };

        this.state = {
            following: [],
            followers_count: [],
            following_count: [],
        }

        this.state = {
            showDropdown: false,
            currentUserProfile: false
        };

        this.state.display_name = props.f_name;
        this.toggleClass = this.toggleClass.bind(this);
        this.toggleBox = this.toggleBox.bind(this);
        this.editPen = this.editPen.bind(this);
        this.directToCreatePin = this.directToCreatePin.bind(this);
        this.isUserFollowing = this.isUserFollowing.bind(this);
        this.unfollowUser = this.unfollowUser.bind(this);
        this.followUser = this.followUser.bind(this);
    }

    isUserFollowing(e){
        e.preventDefault();

    }

    unfollowUser(e){
        e.preventDefault();
        // debugger
        let delteIds = {
            follower_id: window.currentUser.id,
            followed_user_id: Number(this.props.match.params.id),
            id: window.currentUser.id
        }
        

        this.props.unfollowUser(delteIds)
        // debugger
        let buttonRed = document.getElementById('following-btn-22-1')
        let buttonBlack = document.getElementById('following-btn-22-2')

        buttonRed.style.display = 'flex';
        buttonBlack.style.display = 'none';
    }

    followUser(e){
        e.preventDefault();
        // debugger

        let followForm = {
            follower_id: window.currentUser.id,
            followed_user_id: Number(this.props.match.params.id)
        }

        // debugger

        this.props.createFollow(followForm)
        let buttonRed = document.getElementById('following-btn-22-1')
        let buttonBlack = document.getElementById('following-btn-22-2')

        buttonRed.style.display = 'none';
        buttonBlack.style.display = 'flex';
    }

    directToCreatePin(e){
        e.preventDefault();

        this.props.history.push('/pin-create')
    }
    // clickBoardDD(e){
    //     e.preventDefault();
    //     (e) => this.props.openModal('createBoard')

        // let dropDiv = document.getElementById('hidden-plus-opt')
        // let backgroundDiv = document.getElementById('background-plus-modal')
        // // let logoHeader = document.body.getElementsById('logo-on-logged-in-header-plus-id')

        // if (dropDiv.className === "hidden-plus-opt-h"){
        //     dropDiv.className = "hidden-plus-opt";
        //     backgroundDiv.className="ul-logged-dropdown-active-background-plus"
        //     // logoHeader.style.backgroundColor = "red";
        // } else if (backgroundDiv.className === "ul-logged-dropdown-active-background-plus") {
        //     backgroundDiv.className = "ul-logged-dropdown-background-plus"
        //     dropDiv.className = "hidden-plus-opt-h"
        // }


    // }

    componentDidMount(){
        debugger
        if(Number(window.currentUser.id) === Number(this.props.match.params.id)){
            console.log('current user on window matches profile')
            // debugger
            this.setState({currentUserProfile: true})
        } else {
            // debugger
            // let followStuff = {follower_id: window.currentUser.id, followed_user_id: Number(this.props.match.params.id), info: 'isFollowing'}
            // this.props.isFollowing(followStuff)
        }
        debugger

        let followData = {

            id: Number(this.props.match.params.id),
            current_user_id: window.currentUser.id,
            profile_users_id: Number(this.props.match.params.id)
        }
        
        this.props.fetchUserFollowing(followData);

        // if(!!this.props.followers){
        //     debugger
        //     this.setState(
        //         {following: this.props.isFollowing},
        //         {followers_count: this.props.followers.count},
        //         {following_count: this.props.following.count}
        //         )
        // }

        this.props.fetchUser(this.props.match.params.id);
        this.props.fetchBoards(this.props.match.params.id);
        // this.setState({boards: Object.values(this.props.boards.boards)});
    }

    componentDidUpdate(prevProps){
        debugger
        if(prevProps.boards !== this.props.boards){
            this.setState({boards: Object.values(this.props.boards.boards)});
        } else if (prevProps.follow !== this.props.follow) {
            this.setState(
                {following: this.props.follow.isFollowing, followers_count: this.props.follow.followers.count, following_count: this.props.follow.following.count})
        }

        // if(prevProps.followers !== this.props.followers || prevProps.following !== this.props.following || prevProps.isFollowing !== this.props.isFollowing) {
        //     this.setState(
        //         {following: this.props.isFollowing},
        //         {followers_count: this.props.followers.count},
        //         {following_count: this.props.following.count}
        //         )
        // }
    }

    toggleClass(e) {
        // e.preventDefault();
        this.setState({isActive: !this.state.isActive});
    }

    editPen(e){
        window.editingBoard = e.currentTarget.id;
        // e.stopPropagation();
        e.preventDefault();
        this.props.openModal('editBoard');
    }

    toggleBox(e){
            e.preventDefault();

        let dropDiv = document.getElementById('hidden-plus-opt')
        let backgroundDiv = document.getElementById('background-plus-modal')
        // let logoHeader = document.body.getElementsById('logo-on-logged-in-header-plus-id')

        if (dropDiv.className === "hidden-plus-opt-h"){
            dropDiv.className = "hidden-plus-opt";
            backgroundDiv.className="ul-logged-dropdown-active-background-plus"
            // logoHeader.style.backgroundColor = "red";
        } else if (backgroundDiv.className === "ul-logged-dropdown-active-background-plus") {
            backgroundDiv.className = "ul-logged-dropdown-background-plus"
            dropDiv.className = "hidden-plus-opt-h"
        }
    
    }
// ---------- create darkening effect when hovering tile ----------- 
    // hoverEvent(){
    //     // e.preventDefault();
    //   
    //     if(condition){
    //         console.log('condition true')
    //       
    //     } else {
    //       
    //         console.log('condition false')
    //     }
    //   
    //     // let imageSection = document.getElementById('image-section-board');
    //     // imageSection.style.filter = 'brightness(0.9)';

    //     // let editIcon = document.getElementById('');
    //     // editIcon.style.display = "relative"


    // };

    render() {

        if (!this.state.boards ){
        // if (!this.state.boards || !this.state.following){
        // if (!this.state.boards || !this.state.following || !this.state.following_count || !this.state.followers_count){
            debugger
            return null
        }


        // if (!this.state.following){
        //     this.setState(
        //         {following: this.props.isFollowing},
        //         {followers_count: this.props.followers.count},
        //         {following_count: this.props.following.count}
        //         )
        // }

        const handelDate = (updatedTime) => {
            let currentTime = new Date();
            let expireTime = new Date(updatedTime);
    
            let days = (currentTime - expireTime) / (1000 * 3600 * 24);
            return (Math.floor(days));
        };

        // let lock = document.getElementById('outer-div-tile-edit');

        let boards = Object.values(this.props.boards.boards)

        let profilePage

        // debugger

        if(this.state.currentUserProfile){profilePage = (
            <div>

                <div className="show-page-box-1">
                    <header className="profile-header">

                        <div className="profile-div">
                            <img className="profile-photo" src={this.props.user.photoUrl} alt="profile photo" />
                        </div>

                        <h2 className="username-on-profile">{this.props.user.f_name}{(this.props.user.l_name ? this.props.user.l_name : "").charAt(0)}</h2>
                        
                        <h1 className="email-on-profile">{"@"}{this.props.user.username}</h1>

                        <h1 className="email-on-profile"> {this.state.followers_count} followers • {this.state.following_count} following</h1>
    
                    </header>
               </div>
{/* ----------------------- this is the profile page edit bar while loged in as user ------------- */}

               <div className="edit-bar-profile-page">

                    <div className="left-box-edit-bar">

                        <Link to="/edit-profile">
                            <div className="logo-on-logged-in-header">
                                <img id="logo" src={window.penURL} alt="edit-pen-icon" />
                            </div>
                        </Link>

                        
                        <div className="logo-on-logged-in-header">
                            <img id="logo-share-icon" src={window.shareLogoURL} alt="share-icon" />
                        </div>


                    </div>

                    <div className="righ-box-edit-bar">

                        <div className="logo-on-logged-in-header">
                            <img id="logo" src={window.settingsIconURL} alt="settings-icon" />
                        </div>

                        <div className="show-dropdown">

                            <div className="logo-on-logged-in-header" onClick={this.toggleBox}>
                                <img id="logo-cross" src={window.plusURL} alt="+ icon" />
                            </div>
                            <div className="ul-logged-dropdown-background-plus" id="background-plus-modal" onClick={this.toggleBox}>
                            </div>
                                <div className="hidden-plus-opt-h" id="hidden-plus-opt">
                                    <p className="create-p-tag">Create</p>
                                    <ul className="list-plus-men">
                                        <li className="pin-link-bton-mid-bar" onClick={this.directToCreatePin}>Pin</li>
                                        <li className="pin-link-bton-mid-bar" onClick={() => this.props.openModal('createBoard')} >Board</li> 
                                    </ul>

                                </div>

                        </div>

                        <div className="dropdown">
                           
                        </div>


                    </div>
               </div>

{/* --------------- will need to display one or the other depending if profile's user is logged in ---------------------------------- */}

{/* -------------------------- the below boards will render either way ----------------- */}

                <div className="boards-grid-area">
                
                    {boards.map(board => 
                    <div className='dont-show-me' key={board.id} >
                        <div className="logo-on-logged-in-header-board-tile" onClick={this.editPen} id={board.id}>
                                <img id="logo-edit-board" src={window.penURL} alt="edit-pen-icon" />
                        </div>
                            <Link key={board.id} id="board-show-link" to={`/board/${board.id}`}      
                                // onMouseEnter={() => this.hoverEvent(board.id)}
                                // onMouseLeave={() => this.hoverEvent(board.id)}
                            >

                        <div className="board-display-card">
                            {/* Place a lock icon if the board is private */}
                        <div className="outer-div-tile-edit" id="outer-div-tile-edit">
                            <div className="logo-on-logged-in-header-board-lock" style={board.is_private ? {display: "flex" } : { display: "none" }}>
                                    <img id="logo-lock-icon" src={window.lockURL} alt="lock-icon" />
                            </div> 
                        </div>
                            <div className="image-section-board" id="image-section-board">
                                <div className="large-image-onboard">
                                <img className="image-board-1" src={window.photo1} alt="logo" />
                                </div>




                                <div className="other-two-images">

                                    <div className="top-box-123">
                                        <img className="image-board-2" src={window.photo2} alt="logo" />
                                    </div>
                                    
                                    <div className="bottom-box">
                                        <img className="image-board-3" src={window.photo3} alt="logo" />
                                    </div>
                                </div>
                                
                            </div>
                        
                        
                        <div className="title-pin-section">

                                <h2 className="board-title">{ board.title.charAt(0).toUpperCase() + board.title.slice(1)}</h2>
                                {/* <h2 className="board-title">{ board.title.charAt(1).toUpperCase() + board.title.slice(2, -1)}</h2> */}
                                <div className="pins-days"> 
                                    <h2 className="pin-num-board"> 3 Pins </h2>   
                                    <h2 className="days-number">{handelDate(board.updated_at)} d</h2> 
                                </div>

                        </div>
                        </div>
                        </Link>
                    </div>
                    )}

                </div>

            </div>
        )

        } else {profilePage = (
            <div>
                <div className="show-page-box-1">
                    <header className="profile-header">

                        <div className="profile-div">
                            <img className="profile-photo" src={this.props.user.photoUrl} alt="profile photo" />
                        </div>

                        <h2 className="username-on-profile">{this.props.user.f_name}{(this.props.user.l_name ? this.props.user.l_name : "").charAt(0)}</h2>
                        
                        <h1 className="email-on-profile">{"@"}{this.props.user.username}</h1>

                        <h1 className="email-on-profile"> {this.state.followers_count} followers • {this.state.following_count} following</h1>

                        <div className="following-btn-22-1" id="following-btn-22-1" onClick={this.followUser}>Follow</div>

                        <div className="following-btn-22-2" id="following-btn-22-2" onClick={this.unfollowUser}>Following</div>
    
                    </header>
               </div>
{/* ----------------------- this is the profile page edit bar while loged in as user ------------- */}

               <div className="edit-bar-profile-page">
                    <div className="left-box-edit-bar">

                        
                        <div className="logo-on-logged-in-header">
                            <img id="logo-share-icon" src={window.shareLogoURL} alt="share-icon" />
                        </div>


                    </div>
               </div>

{/* --------------- will need to display one or the other depending if profile's user is logged in ---------------------------------- */}

{/* -------------------------- the below boards will render either way ----------------- */}

                <div className="boards-grid-area">
                
                    {boards.map(board => 
                    
                    {if(!board.is_private){
                    
                    return (<div className='dont-show-me' key={board.id} >

                        {/* <div className="logo-on-logged-in-header-board-tile" onClick={this.editPen} id={board.id}>
                                <img id="logo-edit-board" src={window.penURL} alt="edit-pen-icon" />
                        </div> */}
                            <Link key={board.id} id="board-show-link" to={`/board/${board.id}`}      
                                // onMouseEnter={() => this.hoverEvent(board.id)}
                                // onMouseLeave={() => this.hoverEvent(board.id)}
                            >

                        <div className="board-display-card">
                        <div className="outer-div-tile-edit" id="outer-div-tile-edit">
                            {/* <div className="logo-on-logged-in-header-board-lock" style={board.is_private ? {display: "flex" } : { display: "none" }}>
                                    <img id="logo-lock-icon" src={window.lockURL} alt="lock-icon" />
                            </div>  */}
                        </div>
                            <div className="image-section-board" id="image-section-board">
                                <div className="large-image-onboard">
                                <img className="image-board-1" src={window.photo1} alt="logo" />
                                </div>




                                <div className="other-two-images">

                                    <div className="top-box-123">
                                        <img className="image-board-2" src={window.photo2} alt="logo" />
                                    </div>
                                    
                                    <div className="bottom-box">
                                        <img className="image-board-3" src={window.photo3} alt="logo" />
                                    </div>
                                </div>
                                
                            </div>
                        
                        
                        <div className="title-pin-section">

                                <h2 className="board-title">{ board.title.charAt(0).toUpperCase() + board.title.slice(1)}</h2>
                                {/* <h2 className="board-title">{ board.title.charAt(1).toUpperCase() + board.title.slice(2, -1)}</h2> */}
                                <div className="pins-days"> 
                                    <h2 className="pin-num-board"> 3 Pins </h2>   
                                    <h2 className="days-number">{handelDate(board.updated_at)} d</h2> 
                                </div>

                        </div>
                        </div>
                        </Link>
                    </div> )}
                    
                
                }
                    )}

                </div>

            </div>
        )}




        return (
            <div>
                {profilePage}
            </div>
        )
    }
}

export default UserShow;