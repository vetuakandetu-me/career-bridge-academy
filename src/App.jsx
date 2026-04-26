* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Inter, Arial, sans-serif;
  background: #f7f4ef;
  color: #102a43;
}

a {
  text-decoration: none;
}

.hero {
  min-height: 100vh;
  padding: 28px 8%;
  background: linear-gradient(135deg, #f7f4ef 0%, #e8f0f2 100%);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav h2 {
  color: #0b3d5c;
}

nav a {
  background: #0b3d5c;
  color: white;
  padding: 12px 20px;
  border-radius: 999px;
}

.heroContent {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr;
  gap: 40px;
  align-items: center;
  padding-top: 100px;
}

.tag {
  color: #b88945;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

h1 {
  font-size: clamp(42px, 6vw, 78px);
  line-height: 1;
  margin: 10px 0 24px;
  color: #0b3d5c;
}

.sub {
  font-size: 20px;
  line-height: 1.6;
  max-width: 650px;
}

.buttons {
  display: flex;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.primary,
.secondary {
  padding: 15px 24px;
  border-radius: 999px;
  font-weight: 700;
}

.primary {
  background: #0b3d5c;
  color: white;
}

.secondary {
  border: 2px solid #0b3d5c;
  color: #0b3d5c;
}

.card {
  background: white;
  padding: 36px;
  border-radius: 28px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
}

.price {
  font-size: 46px;
  font-weight: 800;
  color: #b88945;
  margin: 10px 0;
}

.section {
  padding: 80px 8%;
}

.section h2 {
  font-size: 38px;
  color: #0b3d5c;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.grid div,
.steps div {
  background: white;
  padding: 28px;
  border-radius: 24px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.06);
  font-weight: 700;
}

.soft {
  background: #0b3d5c;
  color: white;
}

.soft h2 {
  color: white;
}

.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.steps span {
  color: #b88945;
  font-weight: 800;
}

.steps h3 {
  color: #0b3d5c;
}

.apply {
  text-align: center;
}

form {
  max-width: 650px;
  margin: 30px auto 0;
  display: grid;
  gap: 16px;
}

input,
select,
textarea {
  padding: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 14px;
  font-size: 16px;
}

textarea {
  min-height: 120px;
}

button {
  background: #0b3d5c;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 14px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
}

footer {
  background: #082f49;
  color: white;
  text-align: center;
  padding: 40px 8%;
}

@media (max-width: 850px) {
  .heroContent,
  .grid,
  .steps {
    grid-template-columns: 1fr;
  }

  .heroContent {
    padding-top: 60px;
  }

  nav {
    gap: 20px;
  }
}
