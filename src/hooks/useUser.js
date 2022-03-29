import React, { useState } from 'react';
import UserService from '../api/UserService'

export default function useUser() {

    return {     
            create: async(data) => { 
                var response = await UserService.create(data)
                if (response) {
                    return response;
                }
                return false;
            },  
            getUsers: async() => { 
                var response = await UserService.getUsers()
                if (response) {
                    return response.data;
                }
                return false;
            },       
    };
}
