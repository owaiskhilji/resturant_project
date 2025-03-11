export default function Prices(){
    return(
        <div className="flex flex-col justify-center text-center min-h-screen mt-36">
              <p className="text-lg text-gray-600 mt-4 font-bold font-playfair">
          Our pricing details will be available here soon! Stay tuned.
        </p>


        <div class="font-sans overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-100 whitespace-nowrap">
          <tr>
            <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Joined At
            </th>
            <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>

        <tbody class="bg-white divide-y divide-gray-200 whitespace-nowrap">
          <tr>
            <td class="px-4 py-4 text-sm text-gray-800">
              John Doe
            </td>
            <td class="px-4 py-4 text-sm text-gray-800">
              john@example.com
            </td>
            <td class="px-4 py-4 text-sm text-gray-800">
              Admin
            </td>
            <td class="px-4 py-4 text-sm text-gray-800">
              2022-05-15
            </td>
            <td class="px-4 py-4 text-sm text-gray-800">
              <button class="text-blue-600 mr-4">Edit</button>
              <button class="text-red-600">Delete</button>
            </td>
          </tr>

          <tr>
            <td class="px-4 py-4 text-sm text-gray-800">
              Jane Smith
            </td>
            <td class="px-4 py-4 text-sm text-gray-800">
              jane@example.com
            </td>
            <td class="px-4 py-4 text-sm text-gray-800">
              User
            </td>
            <td class="px-4 py-4 text-sm text-gray-800">
              2022-07-20
            </td>
            <td class="px-4 py-4 text-sm text-gray-800">
              <button class="text-blue-600 mr-4">Edit</button>
              <button class="text-red-600">Delete</button>
            </td>
          </tr>

          <tr>
            <td class="px-4 py-4 text-sm text-gray-800">
              Alen doe
            </td>
            <td class="px-4 py-4 text-sm text-gray-800">
              alen@example.com
            </td>
            <td class="px-4 py-4 text-sm text-gray-800">
              User
            </td>
            <td class="px-4 py-4 text-sm text-gray-800">
              2022-07-21
            </td>
            <td class="px-4 py-4 text-sm text-gray-800">
              <button class="text-blue-600 mr-4">Edit</button>
              <button class="text-red-600">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>



        </div>
    )
}