function UserCard({ name, role }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', margin: '10px', maxWidth: '300px' }}>
      <h3>{name}</h3>
      <p>Роль: <strong>{role}</strong></p>
    </div>
  );
}

export default UserCard;