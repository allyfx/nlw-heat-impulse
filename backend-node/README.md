<h1 align="center">🚀 Backend Node</h1>

## 💡 What is it?
Backend project made in the first stage of #NLWHeat provided by @Rocketseat. It allow user to authenticate in the application using github oauth, allow user to create new messages, and more.
</br>
</br>

## 🖥 Setup
- Clone the repository
- Enter the project folder `backend-node`
- Run `npm install` to install dependecies
- Run `npm run dev` to run the project
</br>
</br>

## 📌 Routes
### Auth Routes
<strong>Github OAuth:</strong></br>
route: `/github`</br>
type: `Get`
</br>
</br>
<strong>Authenticate user:</strong></br>
route: `/authenticate`</br>
type: `Post`</br>
body:
```json
{
	"code": "<Github oAuth code>"
}
```

</br>

### Messages

<strong>Create message:</strong></br>
route: `/messages`</br>
type: `Post`</br>
authenticated route: yes</br>
body:
```json
{
	"message": "<Message content>"
}
```
<strong>Get last three messages:</strong></br>
route: `/messages/last-three`</br>
type: `Get`

</br>

### User routes
<strong>Get user profile:</strong></br>
route: `/profile`</br>
type: `Get`</br>
authenticated route: yes
</br>
</br>


## 🚧 Built With
- NodeJS
- TypeScript
- Prisma
- Express