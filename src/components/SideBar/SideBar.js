import React, {Component} from 'react';
import './SideBar.module.css';

const sidebar = (props) => (
    <section>
        <div>
          <ul>
              <li>Activity</li>
              <li>Billing</li>
              <li>Settings</li>
          </ul>
        </div>
    </section>
);

export default sidebar;