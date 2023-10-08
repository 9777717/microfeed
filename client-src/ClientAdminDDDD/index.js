import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminNavApp from '../components/AdminNavApp';
// import CustomCodeEditorApp from "./components/CustomCodeEditorApp";
import {
    NAV_ITEMS,
  } from "../../common-src/Constants";
document.addEventListener('DOMContentLoaded', () => {
  const $rootDom = document.getElementById('client-side-root');
  if ($rootDom) {
    const root = ReactDOM.createRoot($rootDom);
    root.render(
      <React.StrictMode>
        {/* <CustomCodeEditorApp/> */}
        <AdminNavApp
          currentPage={NAV_ITEMS.EDIT_DD}
        >
          <div>你好!</div>
        </AdminNavApp>
      </React.StrictMode>
    );
  }
});