import React from 'react';
import { Card,Button,Flex } from 'antd';
import myImage from "./图片.png"
const MyMiddleContent = () => (
    <div>

        <Card style={{backgroundImage:`url(${myImage})`,
                    backgroundSize: 'cover',
                    width:'800px',
                    height: '400px', // 根据实际需要调整高度
                
            }}>

        </Card>
        {/* <Flex gap="small" wrap="wrap">
            <Button type="primary" circle style={{color: 'white',backgroundColor: 'rgb(100, 3, 8)'}}>1</Button>
            <Button type="primary" circle style={{color: 'white',backgroundColor: 'rgb(100, 3, 8)'}}>2</Button>
            <Button type="primary" circle style={{color: 'white',backgroundColor: 'rgb(100, 3, 8)'}}>3</Button>
            <Button type="primary" circle style={{color: 'white',backgroundColor: 'rgb(100, 3, 8)'}}>4</Button>
        </Flex> */}
    </div>

);
export default MyMiddleContent;