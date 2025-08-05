import Layout from "../Layout/Layout";

export default function Product(){

    return(
        <Layout>
          <div className="fixed top-[90px] left-[265px] right-0 z-[5] bg-white px-6 py-2 border-b border-gray-200 flex justify-between items-center">
        <div className="flex-1">
          <h1 className="text-lg font-semibold text-gray-900 ms-3">Ürünler</h1>
          <p className="text-sm text-gray-600 ms-3">Ürünlerinizi buradan ekleyebilir, düzenleyebilir ve stok durumlarını yönetebilirsiniz.</p>
        </div>
        
        <button 
          onClick={() => setIsOffcanvasOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md font-medium text-sm transition-colors me-3 rounded-lg"
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z" fill="white"/>
          </svg>
          Yeni Ürün Ekle
        </button>
 
      </div>
        </Layout>
    )
}