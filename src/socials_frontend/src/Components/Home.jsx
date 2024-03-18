import React from 'react';
import { Card } from 'antd';
import { Button } from 'semantic-ui-react'

function Home() {
    return (
        <div>
            <div>
                <Card
                    title="Event Name:"
                    bordered={false}
                    style={{
                        width:1230, // Increased width to 400px
                        background: '#d5f4e6', // Light cream color
                    }}
                >
                    <p>Event Genre :</p>
                    <p>Event Location:</p>
                    <p>Event Time:</p>
                    <p>Event Date:</p>
                    <p>Event Details:</p>
                    <div style={{display:"flex",justifyContent:"flex-end"}}>
                        <Button secondary>join event</Button>
                    </div>
                </Card>
            </div>
            <div style={{marginTop:'10px'}}>
                <Card
                    title="Event Name:"
                    bordered={false}
                    style={{
                        width: 1230, // Increased width to 400px
                        background: '#d5f4e6', // Light cream color
                    }}
                >
                    <p>Event Genre :</p>
                    <p>Event Location:</p>
                    <p>Event Time:</p>
                    <p>Event Date:</p>
                    <p>Event Details:</p>
                    <div style={{display:"flex",justifyContent:"flex-end"}}>
                        <Button secondary>join event</Button>
                    </div>
                </Card>
            </div>
            <div style={{marginTop:'10px'}}>
                <Card
                    title="Event Name:"
                    bordered={false}
                    style={{
                        width: 1230, // Increased width to 400px
                        background: '#d5f4e6', // Light cream color
                    }}
                >
                    <p>Event Genre :</p>
                    <p>Event Location:</p>
                    <p>Event Time:</p>
                    <p>Event Date:</p>
                    <p>Event Details:</p>
                    <div style={{display:"flex",justifyContent:"flex-end"}}>
                        <Button secondary>join event</Button>
                    </div>
                </Card>
            </div>
            <div style={{marginTop:'10px'}}>
                <Card
                    title="Event Name:"
                    bordered={false}
                    style={{
                        width: 1230, // Increased width to 400px
                        background: '#d5f4e6', // Light cream color
                    }}
                >
                    <p>Event Genre :</p>
                    <p>Event Location:</p>
                    <p>Event Time:</p>
                    <p>Event Date:</p>
                    <p>Event Details:</p>
                    <div style={{display:"flex",justifyContent:"flex-end"}}>
                        <Button secondary>join event</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Home;
