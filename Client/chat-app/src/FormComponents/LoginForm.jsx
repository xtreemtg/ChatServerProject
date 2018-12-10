import React, { Component } from 'react';

export class LoginForm extends Component{
    render(){
        return(
            <div>
                <form>
                    <div class="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required/>
                        <br/>
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required/>

                        <button type="submit">Login</button>
                    </div>
                </form>
                <p>Not a user? Sign up <a href="url">here</a></p>
            </div>
        );
    }
}