import { Button, Text } from "./index";

const Table = ({ columns, data, showButtons, onUpdate, onDelete }) => {
  return (
    <table className=" min-w-full table-auto border-collapse flex-1">
      {/* header */}
      <thead>
        <tr className="bg-gray-300">
          {columns.map((column) => (
            <th key={column.accessor}>
              <Text label={column.Header} style={"text-left text-white p-2"} />
            </th>
          ))}
          {showButtons && (
            <th className="px-4 py-2 text-center">
              <Text label={"Aksi"} style={"text-left text-white py-2 px-7"} />
            </th>
          )}
        </tr>
      </thead>

      {/* body */}
      <tbody>
        {data.length > 0 ? (
          data.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.accessor}>
                  <Text
                    label={item[column.accessor]}
                    style={"text-left text-black p-2"}
                  />
                </td>
              ))}
              {showButtons && (
                <td className="px-4 py-2 text-center">
                  <Button
                    style="bg-blue-500 text-white mr-2"
                    type="button"
                    label="Update"
                    onClick={() => onUpdate(item.id)}
                  />
                  <Button
                    style="bg-red-500 text-white"
                    type="button"
                    label="Delete"
                    onClick={() => onDelete(item.id)}
                  />
                </td>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length}>Tidak ada data!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
