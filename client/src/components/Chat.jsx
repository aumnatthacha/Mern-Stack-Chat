/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef, useContext } from "react";
import { UserContext } from "../context/UseContext";
import axios from "axios";
import Logo from "./Logo";
import Context from "./Context";

const Chat = () => {
    return (
        <div className="flex h-screen">
            <div className="bg-white w-1/3 flex flex-col">
                <div className="flex-grow">
                    <Logo />
                    <Context
                        username={"user1"}
                        id={'65a87a3f953941ba83dd70e5'}
                        online={true}
                        selected={true}
                    />
                    <Context
                        username={"user2"}
                        id={'65a8a01d8b4a55e73beb5d4a'}
                        online={false}
                        selected={false}
                    />
                </div>
                <div className="p-2 text-center flex items-center justify-center">
                    <span className="mr-2 text-sm text-gray-600 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        Username
                    </span>
                    <button className="text-sm bg-blue-100 py-1 px-2 text-gray-500 border rounded-sm">
                        Logout
                    </button>
                </div>
            </div>
            <div className="flex flex-col bg-blue-50 w-2/3 p-2">
                <div className="flex-grow">
                    <div className="flex h-full flex-grow items-center justify-center" >
                        <div className="text-gray-300">
                            &larr; Select a person from sidebar
                        </div>
                    </div>
                </div>
                <form className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Type your message"
                        className="bg-white flex-grow border rounded-sm p-2"
                    />
                    <label className="bg-blue-200 p-2 text-gray-600 cursor-pointer rounded-sm border border-blue-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                    </label>
                    <button
                        type="submit"
                        className="bg-blue-500 p-2 text-white rounded-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    )

};

export default Chat;