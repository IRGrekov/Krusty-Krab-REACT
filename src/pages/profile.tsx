import { ProfileForm } from '../components/profile-form/profile-form'
import { UpdateProfileForm } from '../components/update-profile-form/update-profile-form'
import style from './pages.module.css'

export function Profile() {
  return (
    <section className={style.profile}>
      <ProfileForm />
      <UpdateProfileForm />
    </section>
  )
}
