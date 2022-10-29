import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Timeline, Event } from 'react-trivial-timeline';


ReactDOM.render(
    <div>
        <Timeline lineColor="black">
            <Event interval={{ start: 2010 }} title="Event title" subtitle="Subtitle">
                Content
            </Event>
            <Event interval="2016 – 2019" title="Some text">
                Some content
            </Event>
        </Timeline>
    </div>,
    document.getElementById('root')
);

ReactDOM.render(
    <React.StrictMode>
        <App />

        <div id="timeline">
            <Timeline lineColor="black">
                <Event interval={{ start: 2019 }} title="Đại học" subtitle="Trường Đại học Sư Phạm TP.HCM">
                    Content
                </Event>
                <Event interval="2016  - 2019" title="Phổ thông" subtitle="Trường THPT Phạm Văn Đồng">

                    Some content
                </Event>
                <Event interval="2012 - 2016" title="Trung học" subtitle="Trường THCS Nguyễn Du">
                    Some content
                </Event>
                <Event interval="2007 - 2012" title="Tiểu học" subtitle="Trường TH Đinh Tiên Hoàng">
                    Some content
                </Event>
                <Event interval="" title="Event title" subtitle="Subtitle">
                    Some content
                </Event>

            </Timeline>
        </div>

    </React.StrictMode>,
    document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
