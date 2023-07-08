import React from "react";
import  moment  from 'moment';
import momentTz from 'moment-timezone';
interface Props {
  appData: any[];
  tHead: string[];
}

const AppTable: React.FC<Props> = ({ tHead, appData }) => {
  const now_moment = moment();
  const moment_TZ = momentTz();
  const tHeadContent = tHead.map((thValue: string) => {
    return (
      <th
        key={thValue}
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        {thValue}
      </th>
    );
  });

  const tBodyContent = appData.map((trValue: any) => {
    // const isHR = trValue.hr > 120 ? 'high' : trValue.hr > 90 ? 'mid' : 'low' ;
    return (
      <tr key={trValue.id}>
        {tHead.map((thValue: string) => {
          const tdRow =
            thValue === "start" || thValue === "end" ? (
              <td key={thValue} className="px-6 py-4 whitespace-nowrap">
                {trValue[thValue]}
                {/* {now_moment.format(trValue[thValue], 'dddd, MMMM Do YYYY, h:mm:ss a"')} */}
              
              </td>
            ) : (
              <td key={thValue} className="px-6 py-4 whitespace-nowrap">
                {String(trValue[thValue])}
              </td>
            );

          return tdRow;
        })}
      </tr>
    );
  });

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>{tHeadContent}</tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {tBodyContent}
      </tbody>
    </table>
  );
};

export default AppTable;

