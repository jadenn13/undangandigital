'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Calendar, 
  MapPin, 
  Heart, 
  Upload, 
  Edit, 
  Trash2, 
  Eye, 
  Copy, 
  Download,
  Plus,
  Search,
  Filter
} from 'lucide-react'

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('orders')
  const [searchTerm, setSearchTerm] = useState('')

  const orders = [
    {
      id: 'INV-001',
      customer: 'Ahmad & Siti',
      eventType: 'Pernikahan',
      template: 'Elegant Rose',
      status: 'pending',
      date: '2024-06-15',
      price: 100000,
      contact: '+62 812-3456-7890'
    },
    {
      id: 'INV-002',
      customer: 'Budi & Ani',
      eventType: 'Ulang Tahun',
      template: 'Birthday Celebration',
      status: 'completed',
      date: '2024-05-20',
      price: 100000,
      contact: '+62 812-3456-7891'
    },
    {
      id: 'INV-003',
      customer: 'PT Maju Bersama',
      eventType: 'Corporate',
      template: 'Corporate Event',
      status: 'in-progress',
      date: '2024-07-10',
      price: 150000,
      contact: '+62 812-3456-7892'
    }
  ]

  const templates = [
    {
      id: 1,
      name: 'Elegant Rose',
      category: 'Pernikahan',
      price: 100000,
      status: 'active',
      preview: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Modern Minimalist',
      category: 'Pernikahan',
      price: 100000,
      status: 'active',
      preview: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Birthday Celebration',
      category: 'Ulang Tahun',
      price: 100000,
      status: 'active',
      preview: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'in-progress':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredOrders = orders.filter(order =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold text-gray-900">
                Admin Panel
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Admin</span>
              <button className="text-sm text-gray-600 hover:text-primary-500">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-8 mb-8">
          {[
            { id: 'orders', name: 'Pesanan', icon: Users },
            { id: 'templates', name: 'Template', icon: Heart },
            { id: 'analytics', name: 'Analytics', icon: Calendar }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-600 hover:text-primary-500'
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Search and Actions */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari pesanan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Tambah Pesanan</span>
          </button>
        </div>

        {/* Content */}
        {activeTab === 'orders' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm"
          >
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Daftar Pesanan</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID Pesanan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pelanggan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jenis Acara
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Template
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tanggal
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Harga
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.eventType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.template}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                          {order.status === 'pending' && 'Menunggu'}
                          {order.status === 'in-progress' && 'Dalam Proses'}
                          {order.status === 'completed' && 'Selesai'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Rp {order.price.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-primary-600 hover:text-primary-900">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="text-blue-600 hover:text-blue-900">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-900">
                            <Copy className="h-4 w-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'templates' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {templates.map((template) => (
              <div key={template.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative">
                  <img
                    src={template.preview}
                    alt={template.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      template.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {template.status === 'active' ? 'Aktif' : 'Nonaktif'}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{template.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{template.category}</p>
                  <p className="text-lg font-bold text-primary-600 mb-4">
                    Rp {template.price.toLocaleString()}
                  </p>
                  <div className="flex space-x-2">
                    <button className="flex-1 btn-primary text-sm py-2">
                      Edit
                    </button>
                    <button className="flex-1 btn-secondary text-sm py-2">
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'analytics' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { title: 'Total Pesanan', value: '24', icon: Users, color: 'bg-blue-500' },
              { title: 'Pendapatan', value: 'Rp 2.400.000', icon: Calendar, color: 'bg-green-500' },
              { title: 'Template Aktif', value: '8', icon: Heart, color: 'bg-primary-500' }
            ].map((stat, index) => (
              <div key={stat.title} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className={`${stat.color} rounded-lg p-3`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AdminPanel