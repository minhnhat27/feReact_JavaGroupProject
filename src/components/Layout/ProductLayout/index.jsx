import Header from '../Header/Header'

export default function ProductLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
