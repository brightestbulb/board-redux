import React from 'react'
import { Link } from "react-router-dom"
import { Table, Button } from 'react-bootstrap';

export default function BoardList({items}) {
    return (
        <div align="center">
            { items && (
                <>
                    <h2 className="title" style={{float:'left'}}>게시판</h2>
                    {/* <Link to="/create"> */}
                        <Button color="primary" style={{float:'right'}}>추가</Button>
                    {/* </Link> */}
                    <Table className="item-list">
                        <thead>
                            <tr>
                                <th style={{width:'10%', textAlign:'center'}}>ID</th>
                                <th>제목</th>
                                <th style={{width:'20%', textAlign:'center'}}>작성자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.length === 0 && (
                                <tr>
                                    <td colSpan="3">게시글이 없습니다.</td>
                                </tr>
                            )}
                            {items.length > 0 && items.map(item => (
                                <tr key={item.id}>
                                    <td align="center">{item.id}</td>
                                    <td align="left">
                                        {item.title}
                                        {/* <Link to={`/board/${item.id}`} className="board-title">{item.title}</Link> */}
                                    </td>
                                    <td align="center">{item.writer}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
        </div>
    )
}
