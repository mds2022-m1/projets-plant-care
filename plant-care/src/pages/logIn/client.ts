import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ebamkhaelqkqphvbufuv.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViYW1raGFlbHFrcXBodmJ1ZnV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk3MjA2NjksImV4cCI6MTk4NTI5NjY2OX0.xStA-WMhuzR9NSpBfs7nJuKf98XwDi41qoaNNXbDC3o"
const supabase = createClient(supabaseUrl, supabaseKey)

export {
  supabase
}