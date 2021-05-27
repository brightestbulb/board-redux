import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardList from "../component/BoardList";
import { actions } from '../state/index';

export default function BoardListContainer() {

    const dispatch = useDispatch();
    const items = useSelector(state => state.board.boards[0]);
    const isLoading = useSelector(state => state.board.isLoading);

    useEffect(() => {
        dispatch(actions.getList());
    }, [])

    return (
        <div>
            {isLoading && <p>조회중 ...</p>}
            <BoardList items={items} />
        </div>
    )
}
