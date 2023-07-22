import { users, header, action } from "../types";
import { MouseEventHandler } from "react"
import Button from "./Button";

interface Props{
    headers: header[]
    data: users
    actionName: action
    actionClick: MouseEventHandler<HTMLButtonElement>
}

const Table = ( { headers, data, actionName, actionClick }: Props ): JSX.Element => {
    return(
        <table>
            <thead>
                <tr className="tr-headers">
                    {headers.map((header, i) => (<th className="td-header" key={i}>{header}</th>))}
                </tr>
            </thead>
            {
                Array.isArray(data) && data.length > 0 &&
                <tbody>{        
                    data.map((fact, i) => {
                        return(
                            <tr className="tr-data" key={i}>
                                <td className="td-thumbnail">
                                    <img 
                                        src={fact.picture.thumbnail} 
                                        alt={`${fact.name.title} thumbnail picture.`} 
                                    />
                                </td>
                                <td className="td-first">{fact.name.first}</td>
                                <td className="td-last">{fact.name.last}</td>
                                <td className="td-country">{fact.location.country}</td>
                                <td className="td-action">
                                    <Button 
                                        onClick={actionClick}
                                    >
                                        {actionName}
                                    </Button>
                                </td>
                            </tr>
                        )    
                    })
                }</tbody>
            }
        </table>
    );
};

export default Table;