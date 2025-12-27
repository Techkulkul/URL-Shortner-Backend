# URL-Shortner-Backend

Backend code for URL shortner

API design

POST /url -> Generate the short Url and return it
GET /:shortUrl -> Redirect the user to the map redirectURL
GET /url/analytic -> return the no of time short url has been clicked

<!-- <div>
      <% if (x && x.length > 0) { %>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Redirect URL</th>
            <th>Short URL</th>
            <th>No of clicks</th>
          </tr>
        </thead>
        <tbody>
          <% x.forEach((url, index) => { %>
          <tr>
            <td><%= index + 1 %></td>
            <td><%= url.redirectURL %></td>
            <td>
              <a href="/url/<%= url.shortURL %>" target="_blank">
                <%= url.shortURL %>
              </a>
            </td>
            <td><%= url.visitHistory.length %></td>
          </tr>
          <% }) %>
        </tbody>
      </table>
      <% } %>
    </div> -->
