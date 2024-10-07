export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}
type Description= Record<UserRole,string>
// Замініть наступний код на версію за допомогою Record
const RoleDescription:Description = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};